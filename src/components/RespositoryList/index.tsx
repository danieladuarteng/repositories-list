import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";
import { ApplicationState } from "../../store";
import RepositoryItem from "../RepositoryItem";

// mapear tipos os tipos de informação que vem do mapStateToProps
interface StateProps {
  repositories: Repository[];
}

// mapear funções que vem do mapDispatchToProps
interface DispatchProps {
  loadRequest(): void;
}

// propriedades que vem de componentes pais
// interface OwnProps {}

type Props = StateProps & DispatchProps; // & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
