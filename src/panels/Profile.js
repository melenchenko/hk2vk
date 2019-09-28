import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { FormLayout, Select, Input, Checkbox } from '@vkontakte/vkui';

class Profile extends React.Component {
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
			profile: {},
			cloth: undefined,
			gender: undefined,
			english: undefined
		};
		this.handleCloth = this.handleCloth.bind(this);
		this.handleGender = this.handleGender.bind(this);
		this.handleEnglish = this.handleEnglish.bind(this);
	}

	getProfile() {
		fetch("https://lastweb.ru/stubs/hk2/getProfile.php?vk_id=" + this.props.fetchedUser.id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({profile: result});
			},
			(error) => {
				console.log(error);
			}
		);
	}

	saveProfile() {
		fetch("https://lastweb.ru/stubs/hk2/getProfile.php?vk_id=" + this.props.fetchedUser.id + "&gender=" + this.state.gender + "&speak_english=" + this.state.english + "&cloth_size=" + this.state.cloth)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({profile: result});
			},
			(error) => {
				console.log(error);
			}
		);
	}

	componentDidMount() {
		this.getProfile();
	}

	handleCloth(event) {
		this.setState({cloth: event.target.value});
	}

	handleGender(event) {
		this.setState({gender: event.target.value});
	}

	handleEnglish(event) {
		this.setState({english: event.target.value});
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		const { profile, cloth, english, gender } = this.state;
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					Профиль
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
				<Group title="Мои настройки">
					<FormLayout>
						<Select data-name="gender" top="Пол" placeholder="Выберите пол" value={gender || profile.gender} onChange={this.handleGender}>
							<option value="1">Мужской</option>
							<option value="0">Женский</option>
						</Select>
						<Input data-name="cloth" top="Размер одежды" value={cloth || profile.cloth_size} onChange={this.handleCloth} />		
						<Checkbox data-name="english" value={english || profile.speak_english} onChange={this.handleEnglish}>Знание английского языка</Checkbox>
						<Button size="xl" onClick={() => this.saveProfile()}>Сохранить</Button>
					</FormLayout>
				</Group>
			</Panel>
		);
	}
}

export default Profile;
