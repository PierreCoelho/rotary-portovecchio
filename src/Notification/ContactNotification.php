<?php
namespace App\Notification;

use App\Entity\Contact;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;
use Twig\Environment;

class ContactNotification {

    private $mailer;

    private $renderer;
    
    public function __construct(MailerInterface $mailer, Environment $renderer)
    {
        $this->mailer = $mailer;
        $this->renderer = $renderer;
    }
    
    public function notify(Contact $contact)
    {
        $email = (new Email())
            ->from('contact@rotary-portovecchio.org')
            ->to('nathalie.berolatti@rotary-portovecchio.org')
            ->subject('Nouveau message sur le site de la part de '.$contact->getFirstName().' '.$contact->getLastName())
            ->html($this->renderer->render('contact/email.html.twig', [
                'contact' => $contact,
            ]));

        $this->mailer->send($email);
    }

}