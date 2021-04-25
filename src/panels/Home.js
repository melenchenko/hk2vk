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
		console.log('props');
		console.log(this.props);
		if (this.props.fetchedUser == null) {
			const vk_user = await connect.sendPromise('VKWebAppGetUserInfo');
		} else {
			const vk_user = this.props.fetchedUser;
		}
		
		// fetch("https://lastweb.ru/stubs/hk2/getCatalog.php?vk_id=" + '455172878')
		fetch("https://lastweb.ru/stubs/hk2/getCatalog.php?vk_id=" + vk_user.id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({quests: result});
			},
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
		let moderator_quest_list = [];
		let show_moderator = false;
		quests.forEach((item) => {
			if (item.is_moderator) {
				show_moderator = true;
				if (item.moderate_status == "0") {
					moderator_quest_list.push(<Div key={item.id} data-quest={item.id} onClick={goQuest}>{item.title}</Div>);
				}				
			}
			if (item.moderate_status == "1") {
				quest_list.push(<Div key={item.id} data-quest={item.id} onClick={goQuest}>{item.title}</Div>);
			}
		});
		console.log('show_moderator');
		console.log(show_moderator)
		let result = <Panel id={id}>
			<PanelHeader 
				left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
				ВСЕ КВЕСТЫ
			</PanelHeader>
			<Group title="Доступны к выполнению">
				<Div>{quest_list}</Div>
			</Group>
			{show_moderator &&
			<Group title="Ждут модерации">
				<Div>{moderator_quest_list}</Div>
			</Group>}
		</Panel>;
		return result;
	}
}

export default Home;
