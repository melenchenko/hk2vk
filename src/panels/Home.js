import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
// import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton } from '@vkontakte/vkui';
// import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
// import Axios from 'axios';
// import Quest from '../panels/Quest';

// const axios = require('axios');

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		this.propTypes = {
			id: PropTypes.string.isRequired,
			go: PropTypes.func.isRequired,
			goQuest: PropTypes.func.isRequired,
			fetchedUser: PropTypes.shape({
				id: PropTypes.string,
				photo_200: PropTypes.string,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				city: PropTypes.shape({
					title: PropTypes.string,
				}),
			}),
		};
		this.state = {
			quests: []
		};
	}

	getCatalog() {
		// axios.get('https://lastweb.ru/stubs/hk2/getCatalog.php')
		// .then(function (response) {
		// 	// handle success
		// 	console.log(response.data);
		// 	this.setState({quests: response.data});
		// })
		// .catch(function (error) {
		// 	// handle error
		// 	console.log(error);
		// });
		fetch("https://lastweb.ru/stubs/hk2/getCatalog.php")
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({quests: result});
			},
			// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
			// чтобы не перехватывать исключения из ошибок в самих компонентах.
			(error) => {
				console.log(error);
			}
		)
	}

	componentDidMount() {
		this.getCatalog();
	}

	render() {
		const {id, go, fetchedUser, goQuest} = this.props;
		const { quests } = this.state;
		let quest_list = [];
		quests.forEach((item) => {
			quest_list.push(<Div key={item.id} data-quest={item.id} onClick={goQuest}>{item.title}</Div>);
		});
		let result = <Panel id={id}>
			<PanelHeader 
				left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
				ВСЕ КВЕСТЫ
			</PanelHeader>
			{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
			<Group title="Доступны к выполнению">
				<Div>{quest_list}</Div>
			</Group>
		</Panel>;
		return result;
	}
}

export default Home;
