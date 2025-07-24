// const CheckoutShipping = ({ submitShippingForm, setUseForBilling }) => {

//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const [address, setAddress] = useState('');
//     const [country, setCountry] = useState('');
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [postal, setPostal] = useState('');

//     return <form action={submitShippingForm} className={styles.checkoutForm}>
//         <div>
//             <p>Contact Details</p>
//             <div>First name</div>
//             <input type='text'
//                 required
//                 name="firstName"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder='Your first name' />
//             <div>Last name</div>
//             <input type='text'
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder='Your last name' />
//             <div>First name</div>
//             <input type='email'
//                 required
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Your email' />
//             <div>Phone Number</div>
//             <input type='phone'
//                 name="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder='хх-хх-хх-хх-хх' />
//         </div>

//         <div>
//             <p>Shipping Details</p>

//             <div>Street Address</div>
//             <input type='text'
//                 name="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder='Your street address' />

//             <div>Country / Region</div>
//             <input type='text'
//                 name="country"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 placeholder='Select' />

//             <div>State / Province</div>
//             <input type='text'
//                 name="state"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 placeholder='Select' />

//             <div>City</div>
//             <input type='text'
//                 name="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder='Select' />

//             <div>ZIP / Postal Code</div>
//             <input type='text'
//                 name="postal"
//                 value={postal}
//                 onChange={(e) => setPostal(e.target.value)}
//                 placeholder='Select' />

//             <input type="checkbox"
//                 name="useForBilling"
//                 value={useForBilling}
//                 onChange={(e) => setUseForBilling(e.target.checked)} />
//             <label htmlFor="useForBilling">Use this information for billing</label>

//         </div>

//         <div>
//             <p>Shipping Methods</p>
//             <div className="radio-group">
//                 {shippingMethods.map((sm) => {
//                     return <div className="radio-item">
//                         <input required type="radio"
//                             id={sm.id}
//                             name="shippingMethod"
//                             value={sm.id}
//                             checked={shippingMethod === String(sm.id)}
//                             onChange={(e) => setShippingMethod(e.target.value)} />
//                         <label htmlFor="novaPoshta">{sm.name}</label>
//                     </div>
//                 })}
//             </div>
//         </div>

//         <div>
//             <p>Additional Info</p>
//             Order Notes (Optional)
//             <textarea className="form-control"
//                 id="description"
//                 rows="5"
//                 name="description"
//                 placeholder="Notes about your order, e.g. special notes for delivery" ></textarea>
//         </div>

//         <div>
//             <Link to={"/cart"}><button>Go back</button></Link>
//             <button type="submit">Go to Billing</button>
//         </div>
//     </form>
// }

// export default CheckoutShipping;