import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import { HeaderButton } from '@vkontakte/vkui';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { FormLayout, Input, Textarea, Div, Select } from '@vkontakte/vkui';

class AddQuest extends React.Component {
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
			title: '',
			description: '',
			category: '',
			reward: '',
			msg: '',
			role1: '',
			roledesc1: '',
			rolecount1: '',
			role2: '',
			roledesc2: '',
			rolecount2: '',
			role3: '',
			roledesc3: '',
			rolecount3: '',
		};
		this.handleTitle = this.handleTitle.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
		this.handleReward = this.handleReward.bind(this);
		this.handleR1 = this.handleR1.bind(this);
		this.handleRd1 = this.handleRd1.bind(this);
		this.handleRc1 = this.handleRc1.bind(this);
		this.handleR2 = this.handleR2.bind(this);
		this.handleRd2 = this.handleRd2.bind(this);
		this.handleRc2 = this.handleRc2.bind(this);
		this.handleR3 = this.handleR3.bind(this);
		this.handleRd3 = this.handleRd3.bind(this);
		this.handleRc3 = this.handleRc3.bind(this);
	}

	componentDidMount() {
		console.log('addquest mount');
	}

	handleR1(event) {
		this.setState({role1: event.target.value});
	}

	handleRd1(event) {
		this.setState({roledesc1: event.target.value});
	}

	handleRc1(event) {
		this.setState({rolecount1: event.target.value});
	}

	handleR2(event) {
		this.setState({role2: event.target.value});
	}

	handleRd2(event) {
		this.setState({roledesc2: event.target.value});
	}

	handleRc2(event) {
		this.setState({rolecount2: event.target.value});
	}

	handleR3(event) {
		this.setState({role3: event.target.value});
	}

	handleRd3(event) {
		this.setState({roledesc3: event.target.value});
	}

	handleRc3(event) {
		this.setState({rolecount3: event.target.value});
	}

	handleTitle(event) {
		this.setState({title: event.target.value});
	}

	handleDescription(event) {
		this.setState({description: event.target.value});
	}

	handleCategory(event) {
		this.setState({category: event.target.value});
	}

	handleReward(event) {
		this.setState({reward: event.target.value});
	}

	saveQuest(goQuest) {
		var rblock = "&role1=" + this.state.role1 + "&role2=" + this.state.role2 + "&role3=" + this.state.role3; 
		var rdblock = "&roledesc1=" + this.state.roledesc1 + "&roledesc2=" + this.state.roledesc2 + "&roledesc3=" + this.state.roledesc3; 
		var rcblock = "&rolecount1=" + this.state.rolecount1 + "&rolecount2=" + this.state.rolecount2 + "&rolecount3=" + this.state.rolecount3; 
		fetch("https://lastweb.ru/stubs/hk2/addQuest.php?vk_id=" + this.props.fetchedUser.id + "&title=" + this.state.title + "&description=" + this.state.description + "&category=" + this.state.category + "&reward=" + this.state.reward + rblock + rdblock + rcblock)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({title: '', description: '', category: '', reward: '', msg: 'Квест создан', role1: '',
				roledesc1: '',
				rolecount1: '',
				role2: '',
				roledesc2: '',
				rolecount2: '',
				role3: '',
				roledesc3: '',
				rolecount3: '',});
			},
			(error) => {
				console.log(error);
			}
		);
	}

	render() {
		const {id, go, fetchedUser, goQuest} = this.props;
		const {title, description, category, reward, msg, role1, role2, role3, roledesc1, roledesc2, roledesc3, rolecount1, rolecount2, rolecount3} = this.state;
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					Создать квест
				</PanelHeader>
				<Group title="Заполните информацию о квесте">
					<Div>{msg}</Div>
					<FormLayout>
						<Input top="Название" value={title} onChange={this.handleTitle} />
						<Select data-name="category" top="Категория" value={category} onChange={this.handleCategory}>
							<option value="1" >Разработка сайта</option>
							<option value="2" >Разработка чат-бота</option>
							<option value="3" >Дизайн</option>
						</Select>
						<Textarea top="Описание квеста" value={description} onChange={this.handleDescription} />
						<Input top="Награда в баллах" value={reward} onChange={this.handleReward} />
						<Group>
							<Input top="Название роли №1" placeholder="Название роли №1" value={role1} onChange={this.handleR1} />
							<Input top="Описание роли №1" placeholder="Описание роли №1" value={roledesc1} onChange={this.handleRd1} />
							<Input top="Нужно людей" placeholder="Нужно людей" value={rolecount1} onChange={this.handleRc1} />
						</Group>
						<Group>
							<Input top="Название роли №2" placeholder="Название роли №2" value={role2} onChange={this.handleR2} />
							<Input top="Описание роли №2" placeholder="Описание роли №2" value={roledesc2} onChange={this.handleRd2} />
							<Input top="Нужно людей" placeholder="Нужно людей" value={rolecount2} onChange={this.handleRc2} />
						</Group>
						<Group>
							<Input top="Название роли №3" placeholder="Название роли №3" value={role3} onChange={this.handleR3} />
							<Input top="Описание роли №3" placeholder="Описание роли №3" value={roledesc3} onChange={this.handleRd3} />
							<Input top="Нужно людей" placeholder="Нужно людей" value={rolecount3} onChange={this.handleRc3} />
						</Group>
						<Button size="xl" onClick={() => this.saveQuest()}>Сохранить</Button>
					</FormLayout>
				</Group>
			</Panel>
		);
	}
}

export default AddQuest;
