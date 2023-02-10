<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_ADMIN')]
class AdminUserController extends AbstractController
{    
    /**
     * @var ManagerRegistry
     */
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    
    #[Route('/administration/membres', name: 'admin_user_index')]
    public function index(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->render('admin/user/index.html.twig',[
            'users' => $users,
        ]);
    }

    #[Route('/administration/membres/ajouter-un-membre', name: 'admin_user_new')]
    public function new(Request $request): Response
    {
        $manager = $this->doctrine->getManager();
        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($user);
            $manager->flush();

            $this->addFlash('success', 'Le nouveau membre a été créé avec succès.');

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('admin/user/new.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/membres/{id}', name: 'admin_user_edit', methods: ['GET', 'POST'])]
    public function edit(User $user, Request $request): Response
    {
        $manager = $this->doctrine->getManager();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->flush();

            $this->addFlash('success', 'Les informations du membre ont été modifiées avec succès.');

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('admin/user/edit.html.twig',[
            'user' => $user,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/membres/{id}', name: 'admin_user_delete', methods: ['DELETE'])]
    public function delete(User $user, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$user->getId(), $request->get('_csrf_token'))) {
            $manager = $this->doctrine->getManager();
    
            $manager->remove($user);
            $manager->flush();

            $this->addFlash('success', 'Le membre '.$user->getFirstName().' '.$user->getLastName().' a été supprimé avec succès.');
        }

        return $this->redirectToRoute('admin_user_index');
    }
}