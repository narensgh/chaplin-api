<?php
namespace Api\Service;

use Api\Model\Message;

class MessageService 
{
	private $_em;
	private $_message;
	
	function __construct($em)
	{
		if(!$this->_em)
		{
			$this->_em = $em;
		}
		$this->_message = new Message($this->_em);
	}
	
	public function saveMessage($message)
	{
		$messageId = $this->_message->saveMessage(null, $message);
		return $messageId;
	}
	
	public function getMessage($userId)
	{
		$messages = $this->_message->getMessage($userId);
		return $messages;
	}

}

?>