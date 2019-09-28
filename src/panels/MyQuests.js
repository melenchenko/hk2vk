import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import { HeaderButton } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';

class MyQuests extends React.Component {
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

	getQuests() {
		fetch("https://lastweb.ru/stubs/hk2/getQuestsByVkId.php?vk_id=" + this.props.fetchedUser.id)
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
		this.getQuests;
	}

	render() {
		const {id, go, fetchedUser, goQuest} = this.props;
		const { quests } = this.state;
		let quest_list = [];
		quests.forEach((item) => {
			quest_list.push(<Div key={item.id} data-quest={item.id} onClick={goQuest}>{item.title}</Div>);
		});
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					My quests
				</PanelHeader>
				<Group title="Navigation Example">
					<Div>{quest_list}</Div>
				</Group>
			</Panel>
		);
	}
}

export default MyQuests;
