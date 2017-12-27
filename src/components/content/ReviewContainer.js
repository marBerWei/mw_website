import React from 'react'
import ReviewList from './ReviewList'

const reviews = [
	{name:'Rimma Soskina in Brooklyn, NY | Feb 10, 2017',
	content:'Dr. Weidenbaum-you are truly a master! Thank you for taking the time to thoroughly explain things to both my husband and I.Knowing we had the best possible doctor was a major source of comfort throughout.You have a special gift as a surgeon and as a person. Thank you so much for all of your care and great sense of humor.Thanks also to all of your wonderful staff members for their patience and support Rimma S.'},
	{name:'Gwendolyn J. Tibbals in Poughkeepsie, NY | Nov 14, 2016',
	content:"Dr. Weidenbaum practices medicine in an open, consultative manner. He takes the time to show and explain what the problem is, what remedy he suggests and answers all questions. He maintains that approach during the hospital stay. In my case, an unexpected consequence of the surgery necessitated a 2nd surgery immediately. His handling of informing me, made my decision-making quick and easy. He also is conservative on Rx issues, believing in drugs when you need them, but not when you don't."},
	{name:'Lewis Thomas in Bronx, NY | Jun 23, 2017',
	content:'i had a herniated disc that compressed my sciatic nerve, the pain that this caused was beyond excruciating, i could not stand for more than fifteen seconds before that freight train pain would put me a fetal position,this was for weeks then months,twenty four hours a day i did not have a life anymore, i found dr mark weidenbaum on line thank god for this man he will get your life back. he did my surgery in the morning i was up walking the same morning and went home the same day.'},
	{name: 'Elsayed in Elmhurst, NY | Jul 03, 2016',
	content:'Dr. Weidenbaum is a phenomenal person. Before the surgical date on May 26th, he explained the surgical procedure to me step my step. He helped me understand what exactly he was going to do. That was extremely reassuring, considering that this was not going to be an easy surgery. Dr, Weidenbaum personally came down to the lobby to speak to my family to reassure them that everything is ok. He shows compassion towards his patients and if it is possible to give him more than five starts I would.'},
	{name:'James Mclaughlin in Harrington Park, NJ | Jun 04, 2016',
	content:'Beyond his technical skills as a surgeon, Dr. Weidenbaum is a thoughtful, friendly person with a real ability to communicate with his patients. He is clearly interested in maintaining a very high-quality practice in which the patient never feels neglected or uncertain about what is going on in the treatment. I would rate him at the top the list of several spine surgeons from Manhattan hospitals whom I have consulted in the past. A first-rate doctor, and a first-rate person.'}
]

class ReviewContainer extends React.Component{

	render(){
		return(
			<div className="reviewContainer"><ReviewList reviews={reviews}/></div>
		)
	}
}

export default ReviewContainer