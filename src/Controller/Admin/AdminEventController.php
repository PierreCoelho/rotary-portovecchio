<?php

namespace App\Controller\Admin;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminEventController extends AbstractController
{    
    /**
     * @var ManagerRegistry
     */
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    #[Route('/administration/evenements', name: 'admin_event_index')]
    public function index(EventRepository $eventRepository): Response
    {
        $futurEvents = $eventRepository->findFuturEvents();
        $pastEvents = $eventRepository->findPastEvents();
        $nextEvent = $eventRepository->findNextEvent();
        $galleries = 0;

        foreach ($pastEvents as $event) {
            if($event->getGallery() != null){
                $galleries++;
            }
        }

        return $this->render('admin/index.html.twig', [
            'futur_events' => $futurEvents,
            'next_event' => $nextEvent,
            'past_events' => $pastEvents,
            'galleries' => $galleries,
        ]);
    }
    
    #[Route('/administration/evenements/evenements-futurs', name: 'admin_futur_event_list')]
    public function futurEventsList(EventRepository $eventRepository): Response
    {
        $events = $eventRepository->findFuturEvents();

        return $this->render('admin/event/index.html.twig',[
            'events' => $events,
        ]);
    }

    #[Route('/administration/evenements/evenements-passes-avec-galerie', name: 'admin_past_event_list_gallery')]
    #[Route('/administration/evenements/evenements-passes-sans-galerie', name: 'admin_past_event_list_no_gallery')]
    public function eventsListWithGallery(EventRepository $eventRepository, Request $request): Response
    {
        dump($request->attributes->get('_route'));
        $events = $eventRepository->findPastEvents();

        if($request->attributes->get('_route') == 'admin_past_event_list_gallery'){
            $gallery = true;
        } else {
            $gallery = false;
        }

        return $this->render('admin/event/index.html.twig',[
            'events' => $events,
            'gallery' => $gallery,
        ]);
    }

    #[Route('/administration/evenements/creer-un-evenement', name: 'admin_event_new')]
    public function new(Request $request): Response
    {
        $manager = $this->doctrine->getManager();
        $event = new Event();

        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $event->setPublishedAt(new DateTime());
            $manager->persist($event);
            $manager->flush();

            $this->addFlash('success', 'L\'événement a été créé avec succès.');

            return $this->redirectToRoute('admin_event_index');
        }

        return $this->render('admin/event/new.html.twig',[
            'event' => $event,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/evenements/{id}', name: 'admin_event_edit', methods: ['GET', 'POST'])]
    public function edit(Event $event, Request $request): Response
    {
        $manager = $this->doctrine->getManager();

        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->flush();

            $this->addFlash('success', 'L\'événement a été modifié avec succès.');

            return $this->redirectToRoute('admin_event_index');
        }

        return $this->render('admin/event/edit.html.twig',[
            'event' => $event,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/evenements/{id}', name: 'admin_event_delete', methods: ['DELETE'])]
    public function delete(Event $event, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$event->getId(), $request->get('_csrf_token'))) {
            $manager = $this->doctrine->getManager();
    
            $manager->remove($event);
            $manager->flush();

            $this->addFlash('success', 'L\'événement a été supprimé avec succès.');
        }

        return $this->redirectToRoute('admin_event_index');
    }
}