<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Image;
use App\Entity\Gallery;
use App\Form\GalleryType;
use App\Repository\GalleryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_ADMIN')]
class AdminGalleryController extends AbstractController
{    
    /**
     * @var ManagerRegistry
     */
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }
    
    #[Route('/administration/galerie', name: 'admin_gallery_index')]
    public function index(GalleryRepository $galleryRepository): Response
    {
        $galleries = $galleryRepository->findAll();

        return $this->render('admin/gallery/index.html.twig',[
            'galleries' => $galleries,
        ]);
    }

    #[Route('/administration/galerie/ajouter-des-photos', name: 'admin_gallery_new')]
    public function new(Request $request): Response
    {
        $manager = $this->doctrine->getManager();
        $gallery = new Gallery();

        $form = $this->createForm(GalleryType::class, $gallery);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $images = $form->get('images')->getData();
            foreach($images as $image){
                $uploadedImage = new Image();
                $uploadedImage->setFile($image);
                $gallery->addImage($uploadedImage);
            }
            $manager->persist($gallery);
            $manager->flush();

            $this->addFlash('success', 'Les images ont été ajoutées à l\'événement.');

            return $this->redirectToRoute('admin_gallery_index');
        }

        return $this->render('admin/gallery/new.html.twig',[
            'event' => $gallery,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/galerie/{id}', name: 'admin_gallery_edit', methods: ['GET', 'POST'])]
    public function edit(Gallery $gallery, Request $request): Response
    {
        $manager = $this->doctrine->getManager();

        $form = $this->createForm(GalleryType::class, $gallery);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $images = $form->get('images')->getData();
            foreach($images as $image){
                $uploadedImage = new Image();
                $uploadedImage->setFile($image);
                $gallery->addImage($uploadedImage);
            }
            $manager->persist($gallery);
            $manager->flush();

            $this->addFlash('success', 'Les images de cet événement ont été modifiées avec succès.');

            return $this->redirectToRoute('admin_gallery_index');
        }

        return $this->render('admin/gallery/edit.html.twig',[
            'gallery' => $gallery,
            'form' => $form->createView()
        ]);
    }

    #[Route('/administration/galerie/{id}', name: 'admin_gallery_delete', methods: ['DELETE'])]
    public function deleteGallery(Gallery $gallery, Request $request): Response
    {
        if($this->isCsrfTokenValid('delete'.$gallery->getId(), $request->get('_csrf_token'))) {
            $manager = $this->doctrine->getManager();
    
            $manager->remove($gallery);
            $manager->flush();

            $this->addFlash('success', 'La galerie de photos de l\'événement a été supprimée avec succès.');
        }

        return $this->redirectToRoute('admin_gallery_index');
    }

    #[Route('/administration/image/{id}', name: 'admin_image_delete' , methods: ['DELETE'])]
    public function deleteImage(Image $image, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if($this->isCsrfTokenValid('delete'.$image->getId(), $data['_token'])) {
            $manager = $this->doctrine->getManager();
            $manager->remove($image);
            $manager->flush();

            return new JsonResponse(['success' => true], 200);
        }

        return new JsonResponse(['error' => 'Token invalide'],400);
    }
}