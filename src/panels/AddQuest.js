import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import { HeaderButton } from '@vkontakte/vkui';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { FormLayout, Input, Textarea, Div } from '@vkontakte/vkui';

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
			reward: '',
			msg: ''
		};
		this.handleTitle = this.handleTitle.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleReward = this.handleReward.bind(this);
	}

	componentDidMount() {
		console.log('addquest mount');
	}

	handleTitle(event) {
		this.setState({title: event.target.value});
	}

	handleDescription(event) {
		this.setState({description: event.target.value});
	}

	handleReward(event) {
		this.setState({reward: event.target.value});
	}

	saveQuest(goQuest) {
		fetch("https://lastweb.ru/stubs/hk2/addQuest.php?vk_id=" + this.props.fetchedUser.id + "&title=" + this.state.title + "&description=" + this.state.description + "&reward=" + this.state.reward)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({title: '', description: '', reward: '', msg: 'Квест создан'});
			},
			(error) => {
				console.log(error);
			}
		);
	}

	render() {
		const {id, go, fetchedUser, goQuest} = this.props;
		const {title, description, reward, msg} = this.state;
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
						<Textarea top="Описание" value={description} onChange={this.handleDescription} />
						<Input top="Награда в баллах" value={reward} onChange={this.handleReward} />
						<Button size="xl" onClick={() => this.saveQuest()}>Сохранить</Button>
					</FormLayout>
				</Group>
			</Panel>
		);
	}
}

export default AddQuest;
