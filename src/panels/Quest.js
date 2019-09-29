import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Link, Input } from '@vkontakte/vkui';
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
					var button = <Button size="xl" level="2" onClick={this.props.go} data-to="persik">Исключить</Button>;
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

	startQuest(quest_id) {

	}

	finishQuest(quest_id) {

	}

	render() {
		const {id, go, fetchedUser} = this.props;
		const { quest, loading, user_list } = this.state;
		if (loading) {
			return <Panel id={id}><PanelHeader>Загрузка</PanelHeader><PanelSpinner/></Panel>;
		}
		var beseda = <Button size="xl" level="2" onClick={this.props.go} data-to="persik">Создать беседу VK</Button>;
		var spam = <Div><Input placeholder="Текст сообщения"></Input><Button size="xl" level="2" onClick={this.props.go} data-to="persik">Разослать сообщение</Button></Div>;
		let role_list = [];
		for (var i in quest.roles) {
			var item = quest.roles[i];
			var tmp = [];
			item.users.forEach((it) => {
				tmp.push(<Div><Link>{it.vk_id} {it._vk.first_name} {it._vk.last_name} {it._vk.photo}</Link></Div>);
			});
			role_list.push(<Group title={i}>
				{quest.admin_mode == "1" && beseda}
				{quest.admin_mode == "1" && spam}
				<Div>{item.desc} Нужно волонтеров: {item.need}</Div>
				<Div>{tmp}</Div>
			</Group>);
		}
		const button_start = <Button size="xl" level="2" onClick={this.startQuest(quest.id)}>Завершить мероприятие</Button>;
		const button_finish = <Button size="xl" level="2" onClick={this.finishQuest(quest.id)}>Начать выполнение</Button>;
		if (quest.admin_mode == "1") {
			var button = button_finish;
		} else {
			var button = button_start;
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
				</Group>
				<Group title="Организатор">
					<Div>
						{quest.quest.created_by.first_name} {quest.quest.created_by.last_name} {quest.quest.created_by.id} {quest.quest.created_by.photo}
					</Div>
					<Div>{button}</Div>
				</Group>
				<Group title="Все участники">
					{quest.admin_mode == "1" && beseda}
					{quest.admin_mode == "1" && spam}
				</Group>
				{role_list}
			</Panel>
		);
	}
}

export default Quest;
