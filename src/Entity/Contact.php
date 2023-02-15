<?php
namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

class Contact {

    #[Assert\NotBlank()]
    #[Assert\Length(min: 2, max: 100)]
    private ?string $firstName;

    #[Assert\NotBlank()]
    #[Assert\Length(min: 2, max: 100)]
    private ?string $lastName;

    #[Assert\NotBlank()]
    #[Assert\Email()]
    private ?string $email;

    #[Assert\NotBlank()]
    private ?string $message;

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }
}