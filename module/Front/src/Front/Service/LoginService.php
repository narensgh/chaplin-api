<?php

namespace Front\Service;

use Zend\Session\Container;


class LoginService{

	private $apiBaseUrl;
	private $session;
	public function __construct(){
		$this->session = new Container('front');
		$this->apiBaseUrl ="http://localhost/chaplin-api/api";
	}

	public function login($post){
		unset($post['Login']);
		if (!empty($post)){
			$params = array('authData'=>json_encode($post));
			$response = $this->jsonDecodedData('authenticate', $params, false);
			print_r($response);
			if($response->message == "success")
			{
				$this->session->userId = $response->userdata->userId;
				$this->session->firstName = $response->userdata->firstName;
				return array('controller' => 'index', 'action' => 'wall');
			}
			else 
			{
				return array('controller' => 'index', 'action' => 'login');
			}
		} else{
				return array('controller' => 'index', 'action' => 'login');
		}
	}
	
	
	protected function jsonDecodedData($resource, $params, $isPost = true)
	{
		$paramUrl = $this->processParams($params);
		$url ="";
		$postData = array();
		if($isPost)
		{
			$postData = array(
					'fieldCount' => count($params),
					'fieldsString' => $paramUrl,
						
			);
			$url = $this->apiBaseUrl."/".$resource;
		}
		else
		{
			$url = $this->apiBaseUrl."/".$resource."?".$paramUrl;
		}
		if(!empty($url))
		{
			echo $url;
			$jsonData = $this->hitApi($url,$postData);
			if(!empty($jsonData))
			{
				$arrayData = json_decode($jsonData);
				return $arrayData->response;
			}
		}
		else
		{
			echo "Blank Url is Passed".PHP_EOL;
		}
	}
	protected function processParams($params = Array())
	{
		$paramUrl=  "";
		if(!empty($params))
		{
			foreach ($params as $key=>$data)
			{
				$paramUrl .= $key."=".$data;
			}
		}
		return $paramUrl;
	}
	protected function hitApi($url, $postData)
	{
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL, $url);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		if(!empty($postData))
		{
			curl_setopt($ch,CURLOPT_POST, $postData['fieldCount']);
			curl_setopt($ch,CURLOPT_POSTFIELDS, $postData['fieldsString']);
		}
		$result = curl_exec($ch);
		curl_close($ch);
		return $result;
	}
}



?>