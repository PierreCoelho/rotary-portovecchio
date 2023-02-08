<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create('fr_FR');

        for ($i=0; $i < 5; $i++) { 
            $user = new User();
            $user->setEmail($faker->freeEmail())
                 ->setFirstName($faker->firstName())
                 ->setLastName($faker->lastName())
                 ->setPassword('$2y$13$AmZy2wRWwYQ7Ebn3FdnxR.3sfQJxeLk/g6wwczBBwXNjcRbykBUBm')
                 ->setRoles(['ROLE_ADMIN']);
            
            $manager->persist($user);
        }

        $manager->flush();
    }
}
