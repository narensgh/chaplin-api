<?php
namespace Api\Service;

use Api\Model\User;
class UserService
{
	private $_em;
	private $_user;
	
	function __construct($em)
	{
		if(!$this->_em)
		{
			$this->_em = $em;
		}
		$this->_user = new User($this->_em);
	}
	public function getUser()
	{
		$users = $this->_user->getUser();
		return json_decode(json_encode($users, true));
	}
}

?>