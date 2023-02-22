<?php

namespace App\DataFixtures;

use App\Entity\Event;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create('fr_FR');

        for ($i=0; $i < 8; $i++) { 
            $event = new Event();
            $event->setTitle($faker->realText(20))
                  ->setDescription($faker->realText())
                  ->setLocation($faker->address())
                  ->setOccuresAt($faker->dateTimeBetween('now', '+ 2 months'))
                  ->setPublishedAt($faker->dateTimeAD());
            
            $manager->persist($event);
        }

        for ($j=0; $j < 20; $j++) { 
            $event = new Event();
            $event->setTitle($faker->realText(20))
                  ->setDescription($faker->realText())
                  ->setLocation($faker->address())
                  ->setOccuresAt($faker->dateTimeBetween('-1 year', 'now'))
                  ->setPublishedAt($faker->dateTimeAD());
            
            $manager->persist($event);
        }


        $manager->flush();
    }
}
