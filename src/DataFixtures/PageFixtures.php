<?php

namespace App\DataFixtures;

use App\Entity\Page;
use App\Entity\Section;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class PageFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create('fr_FR');

        $page = new Page();
        $page->setName('members');
        $manager->persist($page);

        $section = new Section();
        $section->setTitle($faker->realText())
                ->setContent($faker->realText())
                ->setPage($page);
        $manager->persist($section);

        $page = new Page();
        $page->setName('history');
        $manager->persist($page);

        for ($i=0; $i < 2; $i++) { 
            $section = new Section();
            $section->setTitle($faker->realText())
                    ->setContent($faker->realText())
                    ->setPage($page);
            
            $manager->persist($section);
        }

        $page = new Page();
        $page->setName('causes');
        $manager->persist($page);

        for ($i=0; $i < 3; $i++) { 
            $section = new Section();
            $section->setTitle($faker->realText())
                    ->setContent($faker->realText())
                    ->setPage($page);
            
            $manager->persist($section);
        }

        $manager->flush();
    }
}
