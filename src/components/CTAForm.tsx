import { useState } from 'react'
import { supabase } from '../supabaseClient' // adjust path if needed

console.log("🧪 Supabase client:", supabase)


export default function CTAForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Submittinf form data:", formData)

    const { data, error } = await supabase.from('form').insert([formData])

    if (error) {
      console.error('Insert error:', error.message)
      alert("Submission failed: " + error.message);
    } else {
      console.log("✅ Inserted to Supabase:", data)
      alert('Form submitted!')
      setFormData({ first_name: '', last_name: '', email: '', gender: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input name="first_name" id="first_name" autoComplete="given-name" onChange={handleChange} value={formData.first_name} />
        <label htmlFor="last_name">Last Name</label>
        <input name="last_name" id="last_name" autoComplete="family-name" onChange={handleChange} value={formData.last_name} />
        <label htmlFor="email">Email</label>
        <input name="email" id="email" autoComplete="email" onChange={handleChange} value={formData.email} />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleChange} value={formData.gender}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button type="submit">Submit</button>
    </form>
  )
}
