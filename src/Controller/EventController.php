<?php

namespace App\Controller;

use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class EventController extends AbstractController
{
    #[Route('/evenements/{id}-{slug}', name: 'app_event_show', requirements: ['slug' => '[a-z0-9\-]*','id' => '\d+'])]
    public function show(Event $event, string $slug): Response
    {
        if ($event->getSlug() !== $slug) {
            return $this->redirectToRoute('event_show', [
                'id' => $event->getId(),
                'slug' => $event->getSlug(),
            ],301);
        }

        return $this->render('event/show.html.twig', [
            'event' => $event,
            'passed' => $event->getOccuresAt() < new DateTime('now')
        ]);
    }

    #[Route('/evenements/{state}', name: 'app_events', requirements: ['state' => '[a-z\-]*'])]
    public function index(EventRepository $repo, string $state, PaginatorInterface $paginator, Request $request): Response
    {
        if($state == 'passes'){
            $query = $repo->findPastEventsQuery();
        } elseif($state == 'a-venir') {
            $query = $repo->findFuturEventsQuery();
        } else {
            return $this->redirectToRoute('app_home');
        }

        $events = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            6
        );

        return $this->render('event/index.html.twig', [
            'events' => $events,
            'state' => $state,
        ]);
    }
}
