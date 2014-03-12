<?php
namespace Api\Service;

use MyProject\Proxies\__CG__\OtherProject\Proxies\__CG__\stdClass;

use Api\Model\Authenticate;

class AuthenticateService 
{
	private $_em;
	private $_authenticate;
	function __construct($em) 
	{
		if(!$this->_em)
		{
			$this->_em = $em;
		}
		$this->_authenticate = new Authenticate($this->_em);
	}
	public function getAuth($authData)
	{		
		$auth = $this->_authenticate->getAuth($authData);
		$authData = new \stdClass();
		if(!empty($auth))
		{
			$authData->message = "success";
			$authData->userdata->userId = $auth[0]['userId'];
			$authData->userdata->firstName = $auth[0]['firstName'];
			$authData->userdata->lastName = $auth[0]['lastName'];
			$authData->userdata->userType = $auth[0]['userType'];
	// 		$authData->userdata->accessToken = $auth[0]['password'];
		}
		else 
		{
			$authData->message = "Invalid Username/password Combination.. !!";
		}
		return $authData;
	}
}

?>