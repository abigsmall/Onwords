var React = require('react');
var AnnotatorBody = require('./annotator-body');
var AnnotatorHeader = require('../header/header');
var HomeButton = require('./home-button');
var AnnotatorMinimizeButton = require('./annotator-minimize-button');

var AnnotatorView = React.createClass({
  componentWillMount: function() {
    console.log('AnnotatorView mounted');
    var THIS = this;
    $(document).on('click', 'body', function(e) {
        if($(e.target).attr('data-reactid')){
            e.preventDefault();
            return;
        }
        THIS.props.updateView('showAnnotatorButton');
    });
  },
  componentWillUnmount: function() {
    console.log('AnnotatorView unmounted');
    $(document).off();
  },
  render: function() {
    return (
      <div className='annotator-view-container'>
        <HomeButton {...this.props} />
        <AnnotatorMinimizeButton {...this.props} />
        <AnnotatorHeader {...this.props} />
        <AnnotatorBody {...this.props} />
      </div>
    );
  }
});

module.exports = AnnotatorView;
