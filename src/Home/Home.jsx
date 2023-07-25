import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Header } from "../Header/Header";
import { Footer } from '../Footer/Footer';
import { NavLink } from "react-router-dom";

const API_URL = 'http://localhost:3000/api/v1/car/';





export const  Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(API_URL)
		.then(response => {
			setData(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	}, [],
	);
	

	
    return(<>
			<Header/>
					<section id="banner" className="major">
						<div className="inner container">
							<header className="major">
								<h1>Here You Will Find your Dream Car</h1>
							</header>
							<div className="content">
								<ul className="actions">
									<li key={"searchCars"}><NavLink to="/search/car" className="button next scrolly">Search Cars</NavLink></li>
								</ul>
							</div>
						</div>
					</section>

					<div id="main">
							<h3 className="text-center m-0">Top Trending</h3>
							<section className="tiles">
							{data.allCars ? ( 
								data.allCars.map(item => (
									
										
									<article key={item._id} style={{backgroundImage: `url(${item.image[0]})`}}>
									
										<span className="image">
											<img src={JSON.stringify(item.image[0]).replace(/"/g, ' ')} alt="" />
										</span>
	
										<header className="major">
											
										
											<p>
												
												<i className="fa fa-cube"></i>{JSON.stringify(item.engineSize).replace(/"/g, ' ')}&nbsp;&nbsp;
												<i className="fa fa-cog"></i> {JSON.stringify(item.transmission).replace(/"/g, ' ')}
											</p>
	
											
												<h3>{JSON.stringify(item.brand).replace(/"/g, ' ')}
													{JSON.stringify(item.name).replace(/"/g, ' ')} 
												</h3>
											 
	
											<p><strong> {JSON.stringify(item.price).replace(/"/g, ' ')}</strong></p>
	
											<p>{JSON.stringify(item.horsePower).replace(/"/g, ' ')}HP</p>
											
											
	
											<div className="major-actions">
												<NavLink to={`/cars/${item._id}`} className="button small">View Car</NavLink>
											</div>
											
										</header>
										
									</article>
	
									
									
								))
									
										): (<h3>loading data...</h3>)}
							</section>
							
							<section>
								<div className="inner">
									<header className="major">
										<h2>About us</h2>
									</header>
									<p>Welcome to our car dealership! We are a team of experienced professionals who are passionate about helping you find the car of your dreams. Our dealership has been serving the local community for many years with a commitment to excellence in customer service and a wide selection of quality vehicles.

Our goal is to make your car buying experience as hassle-free and enjoyable as possible. We understand that purchasing a vehicle is a big decision, which is why we take the time to get to know you and your needs. Our knowledgeable sales staff will work with you to find the perfect car that fits your lifestyle and budget.

In addition to our impressive inventory, we also offer financing options to make your car purchase more affordable. Whether you have good credit, bad credit, or no credit at all, we will work with you to secure the best financing package available.

At our dealership, we pride ourselves on providing exceptional service even after the sale. Our certified technicians are available to perform routine maintenance and repairs to keep your vehicle running smoothly for years to come.

Thank you for considering our dealership for your car buying needs. We look forward to earning your business and exceeding your expectations.</p>
									
								</div>
							</section>



					</div> <Footer/>
					
    </>);
};