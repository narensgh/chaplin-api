define(['jquery', 'chaplin', 'models/hello-world'],function ($, Chaplin, ReleaseModel) {
var ReleaseCollection = Chaplin.Collection.extend({
	model : ReleaseModel,
    url: 'http://localhost/restapi-backbone/api/release',
});
return ReleaseCollection;
});