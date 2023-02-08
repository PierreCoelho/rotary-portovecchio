<?php

namespace App\Repository;

use DateTime;
use App\Entity\Event;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Event>
 *
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    public function save(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Event $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findLatestEvent(): ?Event
    {
        return $this->findPastEvents()[0];
    }

    public function findNextEvent(): ?Event
    {
        return $this->findFuturEvents()[0];
    }

    /**
     * @return Event[] Returns an array of Event objects
     */
    public function findPastEvents(): array
    {
        return $this->createQueryBuilder('e')
                    ->where('e.occures_at < :val')
                    ->setParameter('val', new DateTime('now'))
                    ->orderBy('e.occures_at', 'DESC')
                    ->getQuery()
                    ->getResult();
    }

    /**
     * @return Event[] Returns an array of Event objects
     */
    public function findFuturEvents(): array
    {
        return $this->createQueryBuilder('e')
                    ->where('e.occures_at > :val')
                    ->setParameter('val', new DateTime('now'))
                    ->orderBy('e.occures_at', 'ASC')
                    ->getQuery()
                    ->getResult();
    }

//    /**
//     * @return Event[] Returns an array of Event objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Event
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
