<?php

namespace App\Controller;

use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    #[Route('/evenements/{state}', name: 'app_event_index', requirements: ['state' => '[a-z\-]*'])]
    public function index(EventRepository $repo, string $state): Response
    {
        if($state == 'passes'){
            $events = $repo->findPastEvents();
        } elseif($state == 'a-venir') {
            $events = $repo->findFuturEvents();
        } else {
            return $this->redirectToRoute('app_home');
        }
        return $this->render('event/index.html.twig', [
            'events' => $events,
            'state' => $state,
        ]);
    }
}
