<?php
namespace Api\Model;

class User 
{
	/**
	 *
	 * @var Doctrine\ORM\Entitymanager
	 */
	
	private $_em;
	function __construct($em)
	{
		$this->_em = $em;
	}
	
	public function getUser()
	{
		$q = $this->_em->createQueryBuilder()
		->select('u')
		->from('Api\Model\Entity\User','u');
		$q = $q->orderBy ( 'u.firstName');
		$q = $q->getQuery ();
		return $q->getArrayResult();
	}
}

?>