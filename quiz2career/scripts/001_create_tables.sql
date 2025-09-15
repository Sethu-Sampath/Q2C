-- Create user profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  state TEXT,
  city TEXT,
  school_name TEXT,
  board TEXT,
  stream TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create quiz results table
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_scores JSONB NOT NULL, -- Store scores for each subject
  total_score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_taken INTEGER, -- in seconds
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  recommended_courses JSONB -- Store recommended course data
);

-- Create colleges table
CREATE TABLE IF NOT EXISTS public.colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  state TEXT NOT NULL,
  courses TEXT[] NOT NULL, -- Array of course names
  fees_range TEXT,
  placement_percentage INTEGER,
  highest_package TEXT,
  average_package TEXT,
  ranking INTEGER,
  facilities TEXT[],
  approvals TEXT[],
  website TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user college preferences table
CREATE TABLE IF NOT EXISTS public.user_college_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  preferred_course TEXT NOT NULL,
  preferred_state TEXT,
  budget_range TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_college_preferences ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- Create RLS policies for quiz_results
CREATE POLICY "quiz_results_select_own" ON public.quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "quiz_results_insert_own" ON public.quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "quiz_results_update_own" ON public.quiz_results FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "quiz_results_delete_own" ON public.quiz_results FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for colleges (public read access)
CREATE POLICY "colleges_select_all" ON public.colleges FOR SELECT TO authenticated USING (true);

-- Create RLS policies for user_college_preferences
CREATE POLICY "preferences_select_own" ON public.user_college_preferences FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "preferences_insert_own" ON public.user_college_preferences FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "preferences_update_own" ON public.user_college_preferences FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "preferences_delete_own" ON public.user_college_preferences FOR DELETE USING (auth.uid() = user_id);
