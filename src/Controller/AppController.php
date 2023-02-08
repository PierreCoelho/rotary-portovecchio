<?php

namespace App\Controller;

use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
}
