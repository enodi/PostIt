reducer / document.js
const initialState = {
  documents: [],
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCUMENT_START":
      retutn { ...intialState, { isFetching: true } };
    case "GET_DOCUMENT_SUCCESS":
      retutn {  ...intialState, { isFetching: false, documents: action.documents } }
    case "GET_DOCUMENT_SUCCESS":
      retutn { ...intialState, { isFetching: false, documents: [], error: action.error } };
  }
}
}

...initialState = documents, isFetching

{ document: [], isFetching: true }




action / document.js
import Document from service / document

getdocumentStart() {
  return {
    type: 'GET_DOCUMENT_START'
  }
}
getdocumentSuccess(reponse) {
  return {
    type: 'GET_DOCUMENT_SUCCESS',
    response,
    documents: response
  }
}
const GET_DOCUMENT_ERROR = 'GET_DOCUMENT_ERROR'
getdocumentError(error) {
  return {
    type: GET_DOCUMENT_ERROR,
    error,
    error: error
  }
}

fetchDocument() {
  return (dispatch) {
    dispatch(getdocumentStart())
    Document.get().then((response) => {
      dispatch(getdocumentSuccess(response))

      console.log(response)
    }).catch((err) => {
      dispatch(getdocumentError(error))
      console.log(err)
    })
  }
}

services / document

returns {
  get: api.get('/url').thh,
    put: api.put,
      post: 
}

components / document.js

import fetchDocument from action / document
import dispatch from 'store'
class Document extends Component {
  cconstructor() {
    super(props);
  }

  componentDidMount() {
    dispatch(fetchDocument());
    this.props.fetchDocument();
  }
  render {

    if(this.props.isFetching) return <p>loading.....</p>
    if(this.props.error) return <p>error</p>
    return (
      <div>{ this.props.documents }</div>
    ) 
  }
}

containers / document.js
import fetchDocument from "acgtion/document"
import documentComponent from components / documentconst

mapStatetoProps = (state, ownProps) => {
  return (
    documents: state.documents.documents,
    isFetching: state.documents.isFetching,
    error: state.documents.error
  )
}
const mapDispatchtoProps = (dispatch) => {
  return (
    fetchDocument: () => { dispatch(fetchDocument()) }
  )
}

export documentContainer = connect(mapDispatchtoProps)(documentComponent)
