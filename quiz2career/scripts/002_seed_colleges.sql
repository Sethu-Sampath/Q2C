-- Insert sample colleges data
INSERT INTO public.colleges (name, location, state, courses, fees_range, placement_percentage, highest_package, average_package, ranking, facilities, approvals, website, contact_email, contact_phone) VALUES
-- Engineering Colleges
('Indian Institute of Technology Delhi', 'New Delhi', 'Delhi', ARRAY['Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'], '₹2-3 Lakhs/year', 95, '₹2.5 Crores', '₹25 Lakhs', 1, ARRAY['Library', 'Hostel', 'Sports Complex', 'Labs'], ARRAY['AICTE', 'UGC'], 'https://home.iitd.ac.in', 'info@iitd.ac.in', '+91-11-2659-1000'),

('Indian Institute of Technology Bombay', 'Mumbai', 'Maharashtra', ARRAY['Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering'], '₹2-3 Lakhs/year', 96, '₹3 Crores', '₹28 Lakhs', 2, ARRAY['Library', 'Hostel', 'Sports Complex', 'Research Labs'], ARRAY['AICTE', 'UGC'], 'https://www.iitb.ac.in', 'info@iitb.ac.in', '+91-22-2572-2545'),

('Birla Institute of Technology and Science Pilani', 'Pilani', 'Rajasthan', ARRAY['Computer Science Engineering', 'Electronics Engineering', 'Mechanical Engineering', 'Chemical Engineering'], '₹4-5 Lakhs/year', 88, '₹1.5 Crores', '₹18 Lakhs', 15, ARRAY['Library', 'Hostel', 'Innovation Center'], ARRAY['AICTE', 'UGC'], 'https://www.bits-pilani.ac.in', 'info@pilani.bits-pilani.ac.in', '+91-1596-242-204'),

-- Medical Colleges
('All India Institute of Medical Sciences Delhi', 'New Delhi', 'Delhi', ARRAY['MBBS', 'MD', 'MS', 'Nursing'], '₹1-2 Lakhs/year', 100, '₹50 Lakhs', '₹15 Lakhs', 1, ARRAY['Hospital', 'Library', 'Hostel', 'Research Labs'], ARRAY['MCI', 'UGC'], 'https://www.aiims.edu', 'info@aiims.ac.in', '+91-11-2659-3333'),

('Christian Medical College Vellore', 'Vellore', 'Tamil Nadu', ARRAY['MBBS', 'MD', 'MS', 'Nursing'], '₹3-4 Lakhs/year', 98, '₹40 Lakhs', '₹12 Lakhs', 3, ARRAY['Hospital', 'Library', 'Hostel'], ARRAY['MCI', 'UGC'], 'https://www.cmch-vellore.edu', 'info@cmcvellore.ac.in', '+91-416-228-1000'),

-- Management Colleges
('Indian Institute of Management Ahmedabad', 'Ahmedabad', 'Gujarat', ARRAY['MBA', 'PGDM', 'Executive MBA'], '₹25-30 Lakhs/year', 100, '₹1.5 Crores', '₹35 Lakhs', 1, ARRAY['Library', 'Hostel', 'Case Study Rooms'], ARRAY['AICTE', 'UGC'], 'https://www.iima.ac.in', 'info@iima.ac.in', '+91-79-6632-4444'),

('Indian Institute of Management Bangalore', 'Bangalore', 'Karnataka', ARRAY['MBA', 'PGDM', 'Executive MBA'], '₹25-30 Lakhs/year', 100, '₹1.2 Crores', '₹32 Lakhs', 2, ARRAY['Library', 'Hostel', 'Innovation Lab'], ARRAY['AICTE', 'UGC'], 'https://www.iimb.ac.in', 'info@iimb.ac.in', '+91-80-2699-3000'),

-- Commerce Colleges
('Shri Ram College of Commerce', 'New Delhi', 'Delhi', ARRAY['B.Com', 'B.Com (Hons)', 'Economics (Hons)'], '₹50,000-1 Lakh/year', 85, '₹25 Lakhs', '₹8 Lakhs', 5, ARRAY['Library', 'Computer Lab', 'Auditorium'], ARRAY['UGC', 'DU'], 'https://www.srcc.edu', 'info@srcc.du.ac.in', '+91-11-2766-7891'),

('Loyola College Chennai', 'Chennai', 'Tamil Nadu', ARRAY['B.Com', 'B.Com (Hons)', 'BBA', 'Economics'], '₹1-2 Lakhs/year', 80, '₹20 Lakhs', '₹6 Lakhs', 12, ARRAY['Library', 'Sports Complex', 'Labs'], ARRAY['UGC', 'NAAC'], 'https://www.loyolacollege.edu', 'info@loyolacollege.edu', '+91-44-2817-8200'),

-- Arts Colleges
('Lady Shri Ram College for Women', 'New Delhi', 'Delhi', ARRAY['English (Hons)', 'Psychology (Hons)', 'Political Science (Hons)', 'History (Hons)'], '₹30,000-50,000/year', 75, '₹15 Lakhs', '₹5 Lakhs', 8, ARRAY['Library', 'Cultural Center', 'Sports'], ARRAY['UGC', 'DU'], 'https://www.lsr.edu.in', 'info@lsr.du.ac.in', '+91-11-2433-2275'),

('Presidency University Kolkata', 'Kolkata', 'West Bengal', ARRAY['English (Hons)', 'History (Hons)', 'Political Science (Hons)', 'Economics (Hons)'], '₹20,000-40,000/year', 70, '₹12 Lakhs', '₹4 Lakhs', 15, ARRAY['Library', 'Heritage Building', 'Research Centers'], ARRAY['UGC'], 'https://www.presiuniv.ac.in', 'info@presiuniv.ac.in', '+91-33-2241-1000');
