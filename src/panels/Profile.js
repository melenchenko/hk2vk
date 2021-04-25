import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton, Div } from '@vkontakte/vkui';
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
			english: undefined,
			cat1: undefined,
			cat2: undefined,
			cat3: undefined
		};
		this.handleCloth = this.handleCloth.bind(this);
		this.handleGender = this.handleGender.bind(this);
		this.handleEnglish = this.handleEnglish.bind(this);
		this.handleCat1 = this.handleCat1.bind(this);
		this.handleCat2 = this.handleCat2.bind(this);
		this.handleCat3 = this.handleCat3.bind(this);
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
		fetch("https://lastweb.ru/stubs/hk2/setProfile.php?vk_id=" + this.props.fetchedUser.id + "&gender=" + this.state.gender + "&speak_english=" + this.state.english + "&cloth_size=" + this.state.cloth)
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
		this.setState({english: event.target.checked ? '1' : '0'});
	}

	handleCat1(event) {
		this.setState({cat1: event.target.checked ? '1' : '0'});
	}

	handleCat2(event) {
		this.setState({cat1: event.target.checked ? '1' : '0'});
	}

	handleCat3(event) {
		this.setState({cat1: event.target.checked ? '1' : '0'});
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		let { profile, cloth, english, gender, cat1, cat2, cat3 } = this.state;
		if (cloth === undefined && profile.cloth_size !== undefined) {
			this.setState({cloth: profile.cloth_size});
		}
		if (english === undefined && profile.speak_english !== undefined) {
			this.setState({english: profile.speak_english});
		}
		if (gender === undefined && profile.gender !== undefined) {
			this.setState({gender: profile.gender});
		}
		if (cat1 === undefined && profile.cat1 !== undefined) {
			this.setState({cat1: profile.cat1});
		}
		if (cat2 === undefined && profile.cat2 !== undefined) {
			this.setState({cat2: profile.cat2});
		}
		if (cat3 === undefined && profile.cat3 !== undefined) {
			this.setState({cat3: profile.cat3});
		}
		return (
			<Panel id={id}>
				<PanelHeader 
					/*left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}*/>
					Профиль
				</PanelHeader>
				{fetchedUser &&
				<Group title="Участник">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
				<Group title="Мои настройки">
					<FormLayout>
						<Select data-name="gender" top="Пол" placeholder={(gender == "1" ? "Мужской" : (gender == "0" ? "Женский" : "")) + " (выберите значение)"} value={gender} onChange={this.handleGender}>
							<option value="1" >Мужской</option>
							<option value="0" >Женский</option>
						</Select>
						<Input data-name="cloth" top="Размер одежды" value={cloth} onChange={this.handleCloth} />		
						<Checkbox checked={this.state.english == '1'} data-name="english" value={this.state.english} 
								  onChange={this.handleEnglish}>
							Знание английского языка
						</Checkbox>
						<Div>Категории</Div>
						<Checkbox checked={this.state.cat1 == '1'} data-name="cat1" value={this.state.cat1} 
								  onChange={this.handleCat1}>
							Разработка сайта
						</Checkbox>
						<Checkbox checked={this.state.cat2 == '1'} data-name="cat2" value={this.state.cat2} 
								  onChange={this.handleCat2}>
							Разработка чат-бота
						</Checkbox>
						<Checkbox checked={this.state.cat3 == '1'} data-name="cat3" value={this.state.cat3} 
								  onChange={this.handleCat3}>
							Дизайн
						</Checkbox>
						<Button size="xl" onClick={() => this.saveProfile()}>Сохранить</Button>
					</FormLayout>
				</Group>
			</Panel>
		);
	}
}

export default Profile;
