import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speakers', {path:'/speakers'}),
  this.route('speaker-detail', {path:'/speakers/:id'});
  this.route('speaker-create', {path:'/speakers/create'});
  this.route('speaker-edit', {path:'/speakers/:id/edit'});

  this.route('books');
  this.route('book-create', {path:'/books/create'});
  this.route('book-detail', {path:'/books/:id'});
  this.route('book-edit', {path:'/books/:id/edit'});

  this.route('reports');
  // this.route('report-create', {path:'/books/create'});
  this.route('report-detail', {path:'/reports/:id'});
  // this.route('book-edit', {path:'/books/:id/edit'});

  this.route('404',{path:'*path'});
  this.route('error', { path: '/:error'});
  this.route('book-form');

  this.route('meetings', { path: '/meetings' }, function() {
  this.route('create');
  this.route('detail',{path:'/:id'});
  this.route('edit'),{path:'/:id/edit'};
});

  this.route('reports', function() {
    this.route('create');
    this.route('edit',{path:'/:id/edit'});
    this.route('detail',{path:'/:id'});
  });

  this.route('meeting');
  this.route('meeting-edit');
  this.route('meeting-create');
  this.route('report-detail');
});

export default Router;
