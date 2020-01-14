<?php
namespace Sfi\Site;
use Neos\Flow\Annotations as Flow;
use Neos\Neos\Domain\Service\DefaultPrototypeGenerator;
/**
 * Generate a Fusion prototype definition based on Neos.Neos:Document
 *
 * @Flow\Scope("singleton")
 */
class LegacyDocumentPrototypeGenerator extends DefaultPrototypeGenerator
{
    protected $basePrototypeName = 'Neos.Neos:Document';
    protected $templatePath = 'Private/Templates/NodeTypes';
}
