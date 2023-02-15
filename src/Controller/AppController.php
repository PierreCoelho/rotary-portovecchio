<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Gallery;
use App\Form\ContactType;
use App\Repository\EventRepository;
use App\Repository\GalleryRepository;
use App\Notification\ContactNotification;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EventRepository $eventRepository): Response
    {
        $lastEvent = $eventRepository->findLatestEvent();
        $nextEvent = $eventRepository->findNextEvent();

        return $this->render('app/index.html.twig', [
            'last_event' => $lastEvent,
            'next_event' => $nextEvent,
        ]);
    }

    #[Route('/galerie', name: 'app_gallery')]
    public function gallery(GalleryRepository $galleryRepository): Response
    {
        $galleries = $galleryRepository->findAll();
        return $this->render('gallery/index.html.twig', [
            'galleries' => $galleries,
        ]);
    }

    #[Route('/galerie/{id}-{slug}', name: 'app_gallery_show', requirements: ['slug' => '[a-z0-9\-]*','id' => '\d+'])]
    public function galleryShow(Gallery $gallery, string $slug): Response
    {
        if ($gallery->getSlug() !== $slug) {
            return $this->redirectToRoute('event_show', [
                'id' => $gallery->getId(),
                'slug' => $gallery->getSlug(),
            ],301);
        }

        return $this->render('gallery/show.html.twig', [
            'gallery' => $gallery,
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(Request $request, ContactNotification $notification): Response
    {
       $contact = new Contact();
       $form = $this->createForm(ContactType::class, $contact);
       $form->handleRequest($request);

       if($form->isSubmitted() && $form->isValid()) {
            $notification->notify($contact);

            $this->addFlash('success', 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.');
            return $this->redirectToRoute('app_contact');
       }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
