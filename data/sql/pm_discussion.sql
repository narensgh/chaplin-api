CREATE TABLE IF NOT EXISTS `pm_discussion` (
  `discussion_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `todo_id` int(10) unsigned NOT NULL,
  `content` text NOT NULL,
  `attachment` enum('true','false') NOT NULL DEFAULT 'false',
  `attachment_path` varchar(250) NOT NULL,
  `added_by` int(10) unsigned NOT NULL,
  `edited` enum('true','false') NOT NULL DEFAULT 'false',
  `edited_by` int(10) unsigned NOT NULL,
  `date_added` datetime NOT NULL,
  `date_edited` datetime NOT NULL,
  PRIMARY KEY (`discussion_id`),
  KEY `todo_id` (`todo_id`),
  KEY `added_by` (`added_by`),
  KEY `edited_by` (`edited_by`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
