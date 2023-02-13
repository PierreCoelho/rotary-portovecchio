<?php

namespace App\Controller;

use App\Entity\Page;
use App\Repository\PageRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ClubController extends AbstractController
{
    #[Route('/club/histoire', name: 'app_club_history')]
    public function history(PageRepository $pageRepository): Response
    {
        $page = $pageRepository->findOneByName('history');

        return $this->render('club/history.html.twig', [
            'page' => $page,
        ]);
    }

    #[Route('/club/causes', name: 'app_club_causes')]
    public function causes(PageRepository $pageRepository): Response
    {
        $page = $pageRepository->findOneByName('causes');

        return $this->render('club/causes.html.twig', [
            'page' => $page,
        ]);
    }

    #[Route('/club/membres', name: 'app_club_members')]
    public function members(UserRepository $userRepository, PageRepository $pageRepository): Response
    {
        $page = $pageRepository->findOneByName('members');

        $members = $userRepository->findAll();

        return $this->render('club/members.html.twig', [
            'page' => $page,
            'members' => $members
        ]);
    }
}
