# otis - API

[otis][otis]: outlining on touch device for image segmentation

This is the API server of the [otis web application][otis].
It has only two end points:

 * get : /resources : return a json with the list of all images.
   (look at `resources_list.json` to know the exact format).
 * post : /save : post a json containing the interactions.
   Returns a json of the form {userID: int}.

> Remark: when called by the global otis web app,
> it is routed through the `api/` route.
> meaning `/resources` is actually `/api/resources`


[otis]: https://github.com/mpizenberg/otis
