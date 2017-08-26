import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';

Object.assign(Validation.rules, {
    required: {
      rule: value => {
        return value.toString().trim();
      },
      hint: value => {
        return <span className="form-error is-visible">Required</span>
      }
    },

    email: {
      rule: value => {
        return validator.isEmail(value);
      },
      hint: value => {
        return <span className="form-error is-visible">{value} isn&#39;t an Email</span>
      }
    },

    api: {
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    }
});
