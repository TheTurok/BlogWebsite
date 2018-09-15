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
        {field.meta.error}
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
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }

  if(!values.content){
    errors.content = "Enter a body";
  }

  if(!values.categories){
    errors.categories = "Enter categories";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
