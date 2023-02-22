<?php

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\GalleryRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: GalleryRepository::class)]
class Gallery
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'gallery', targetEntity: Image::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $images;

    #[ORM\OneToOne(inversedBy: 'gallery', cascade: ['persist'])]
    private ?Event $event = null;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSlug(): string
    {
        return (new Slugify())->slugify($this->getEvent()->getTitle());
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setGallery($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getGallery() === $this) {
                $image->setGallery(null);
            }
        }

        return $this;
    }

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }
}
