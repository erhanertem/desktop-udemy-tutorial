import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
	{
		skill: 'HTML+CSS',
		level: 'advanced',
		color: '#2662EA',
	},
	{
		skill: 'JavaScript',
		level: 'advanced',
		color: '#EFD81D',
	},
	{
		skill: 'Web Design',
		level: 'advanced',
		color: '#C3DCAF',
	},
	{
		skill: 'Git and GitHub',
		level: 'intermediate',
		color: '#E84F33',
	},
	{
		skill: 'React',
		level: 'advanced',
		color: '#60DAFB',
	},
	{
		skill: 'Svelte',
		level: 'beginner',
		color: '#FF3B00',
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img className="avatar" src="/pics/unnamed.webp" alt="Ernie Sanders" />
	);
}

function Intro() {
	return (
		<div>
			<h1>Ernie Sanders</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
				voluptas a dolores iusto nemo corporis architecto nisi velit
				incidunt corrupti blanditiis sequi assumenda perspiciatis omnis
				totam nostrum quas, nesciunt dolorum?
			</p>
		</div>
	);
}

function SkillList() {
	skills.map(each => console.log(each));

	return (
		<div className="skill-list">
			{skills.map(each => (
				<Skill skillObj={each} key={each.skill} />
			))}
		</div>
	);
}

function Skill({ skillObj }) {
	// const emoji = {
	// 	beginner: '✅',
	// 	intermediate: '⚠️',
	// 	advanced: '➡️',
	// };
	return (
		<div className="skill" style={{ backgroundColor: skillObj.color }}>
			<span>{skillObj.skill}</span>
			<span>{skillObj.level}</span>
			<span>
				{(skillObj.level === 'beginner' && '✅') ||
					(skillObj.level === 'intermediate' && '⚠️') ||
					(skillObj.level === 'advanced' && '➡️')}
			</span>
			{/* <span>{emoji[skillObj.level]}</span> */}
		</div>
	);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
