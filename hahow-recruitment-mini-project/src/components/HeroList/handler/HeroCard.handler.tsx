import { Dispatch } from 'redux';
import fetchHeroList from '../../../redux/actions/fetchHeros';
import { connect } from 'react-redux';
import HeroList from '../HeroList';

interface IStateProps {
  id: number;
  isCompleted: boolean;
  title: string;
}
interface IDispatcherProps {
  fetchHeroList: () => void;
}

// 将 reducer 中的状态插入到组件的 props 中
export const mapStateToProps = (
  state: IStoreState,
  ownProps: IStateProps
): IStateProps => ({
  id: ownProps.id,
  isCompleted: ownProps.isCompleted,
  title: ownProps.title,
});

//用于建立组件跟 store 的dispatch的映射关系
//将 对应action 插入到组件的 props 中
export const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: IStateProps
): IDispatcherProps => ({
  fetchHeroList: () => {
    dispatch(fetchHeroList());
  },
});

interface IStoreState {
  // todos: Todo[];
  // currentFilter: FiltersEnum;
}

export type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
