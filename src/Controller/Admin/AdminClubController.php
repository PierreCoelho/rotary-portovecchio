<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Page;
use App\Entity\Event;
use App\Form\PageType;
use App\Entity\Section;
use App\Form\EventType;
use App\Repository\PageRepository;
use App\Repository\EventRepository;
use App\Repository\SectionRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_ADMIN')]
class AdminClubController extends AbstractController
{    
    /**
     * @var ManagerRegistry
     */
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    
    #[Route('/administration/club', name: 'admin_club_index')]
    public function index(PageRepository $pageRepository): Response
    {
        $pages = $pageRepository->findAll();

        return $this->render('admin/club/index.html.twig',[
            'pages' => $pages,
        ]);
    }

    #[Route('/administration/club/{id}', name: 'admin_page_edit')]
    public function pageEdit(Page $page, PageRepository $pageRepository, Request $request): Response
    {
        $manager = $this->doctrine->getManager();

        //$page = $pageRepository->findOneByName('history');


        $form = $this->createForm(PageType::class,$page);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->flush();

            $this->addFlash('success', 'La page '. $page->getName() .' a été modifiée avec succès.');

            return $this->redirectToRoute('admin_club_index');
        }

        return $this->render('admin/club/edit.html.twig',[
            'page' => $page,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/administration/club/ajouter-section/{id}', name: 'admin_section_add', methods: ['ADD'])]
    public function addSection(Page $page, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        if($this->isCsrfTokenValid('add'.$page->getId(), $data['_token'])) {
            $manager = $this->doctrine->getManager();
            $section = new Section();
            $section->setTitle('Nouvelle section')
                    ->setContent('Cette partie est actuellement en cours de rédaction');
            $page->addSection($section);
            $manager->flush();

            return new JsonResponse(['success' => true], 200);
        }

        return new JsonResponse(['error' => 'Token invalide'],400);
    }

    #[Route('/administration/club/supprimer-section/{id}', name: 'admin_section_delete', methods: ['DELETE'])]
    public function deleteSection(Section $section, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if($this->isCsrfTokenValid('delete'.$section->getId(), $data['_token'])) {
            $manager = $this->doctrine->getManager();
            $manager->remove($section);
            $manager->flush();

            return new JsonResponse(['success' => true], 200);
        }

        return new JsonResponse(['error' => 'Token invalide'],400);
    }

    #[Route('/administration/club/supprimer-image/{id}', name: 'admin_section_image_delete', methods: ['DELETE'])]
    public function deleteImage(Section $section, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if($this->isCsrfTokenValid('delete'.$section->getId(), $data['_token'])) {
            $manager = $this->doctrine->getManager();
            $section->setThumbnailName(null);
            $manager->flush();

            return new JsonResponse(['success' => true], 200);
        }

        return new JsonResponse(['error' => 'Token invalide'],400);
    }


    /*#[Route('/administration/club/{id}', name: 'admin_section_edit', methods: ['GET', 'POST'])]
    public function edit(Section $section, Request $request): Response
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
    } */
}