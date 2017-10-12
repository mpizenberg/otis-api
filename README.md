# otis - API

[otis][otis]: outlining on touch device for image segmentation

> [1] Outlining Objects for Interactive Segmentation on Touch Devices. 2017.
> Matthieu Pizenberg, Axel Carlier, Emmanuel Faure, Vincent Charvillat.
> In Proceedings of the 25th ACM International Conference on multimedia (MM'17).
> DOI: https://doi.org/10.1145/3123266.3123409

This is the API server of the [otis application][otis] so please
cite the aforementioned paper if used in a research work.

It has only two end points:

 * get : /resources : return a json with the list of all images.
   (look at `resources_list.json` to know the exact format).
 * post : /save : post a json containing the interactions.
   Returns a json of the form {userID: int}.

> Remark: when called by the global otis web app,
> it is routed through the `api/` route.
> meaning `/resources` is actually `/api/resources`


[otis]: https://github.com/mpizenberg/otis


## License

This part of the otis application is licensed under MPL-2.0.
