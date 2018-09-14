import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }



  render(){
    return (
      <form>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Body"
          name="content"
          component={this.renderField}
          />
      </form>
    );
  }
}

function validate(values){

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
