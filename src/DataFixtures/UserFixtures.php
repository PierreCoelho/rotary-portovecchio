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

        for ($i=0; $i < 15; $i++) { 
            $user = new User();
            $firstName = $faker->firstName();
            $lastName = $faker->lastName();
            $user->setEmail(strtolower($firstName).'.'.strtolower($lastName).'@rotary-portovecchio.org')
                 ->setFirstName($firstName)
                 ->setLastName($lastName)
                 ->setPassword('$2y$13$AmZy2wRWwYQ7Ebn3FdnxR.3sfQJxeLk/g6wwczBBwXNjcRbykBUBm')
                 ->setIsHonorary($faker->boolean($chanceOfGettingTrue = 10))
                 ->setRoles(['ROLE_ADMIN']);
            
            $manager->persist($user);
        }

        $manager->flush();
    }
}
