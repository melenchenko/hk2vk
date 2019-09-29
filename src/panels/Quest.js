import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Link } from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
// import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';

import '../globals.js';

class Quest extends React.Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			id: PropTypes.string.isRequired,
			go: PropTypes.func.isRequired,
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
			quest: {},
			loading: true,
			user_list: [],
		};
	}

	getQuest(quest_id) {
		fetch("https://lastweb.ru/stubs/hk2/getQuest.php?id=" + quest_id + "&vk_id=" + this.props.fetchedUser.id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				var user_list = this.state.user_list;
				result.users.forEach((item) => {
					var button = <Button size="xl" level="2" onClick={go} data-to="persik">Исключить</Button>;
					var record = <Div key={item.vk_id}>
						<Link target="_blank" href={"https://vk.com/id" + item.vk_id}>
							{item.vk_id} {item._vk.first_name} {item._vk.last_name}
						</Link>{result.admin_mode == "1" && button}
					</Div>;
					user_list.push(record);
				});
				this.setState({quest: result, loading: false, user_list});		
			},
			(error) => {
				console.log(error);
			}
		)
	}

	componentDidMount() {
		const quest_id = global._quest_id;
		this.getQuest(quest_id);
	}

	render() {
		const {id, go, fetchedUser} = this.props;
		const { quest, loading, user_list } = this.state;
		if (loading) {
			return <Panel id={id}><PanelHeader>Загрузка</PanelHeader><PanelSpinner/></Panel>;
		}
		if (quest.admin_mode == "1") {
			var button = <Button size="xl" level="2" onClick={go} data-to="persik">Мероприятие окончено</Button>;
		} else {
			var button = <Button size="xl" level="2" onClick={go} data-to="persik">Начать выполнение</Button>;
		}
		
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					КВЕСТ
				</PanelHeader>
				<Group title={quest.quest.title}>
					<Div>
						{quest.quest.description}
					</Div>
					<Div>{button}</Div>
				</Group>
				<Group title="Участвуют">
					<Div>
						{user_list}
					</Div>
				</Group>
			</Panel>
		);
	}
}

export default Quest;
