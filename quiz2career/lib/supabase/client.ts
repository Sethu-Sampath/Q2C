let mockUser: { id: string; email: string } | null = null

export function createSupabaseClient() {
  return {
    auth: {
      getUser: async () => {
        console.log("[v0] Mock getUser called, current user:", mockUser)
        return { data: { user: mockUser }, error: null }
      },
      signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
        console.log("[v0] Mock login attempt:", email)
        mockUser = { id: "mock-user", email }
        return { data: { user: mockUser }, error: null }
      },
      signInWithOAuth: async ({ provider, options }: any) => {
        console.log("[v0] Mock OAuth login:", provider)
        return { error: null }
      },
      signUp: async ({ email, password, options }: any) => {
        console.log("[v0] Mock signup attempt:", email)
        mockUser = { id: "mock-user", email }
        return { data: { user: mockUser }, error: null }
      },
      signOut: async () => {
        console.log("[v0] Mock logout")
        mockUser = null
        return { error: null }
      },
    },
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          single: async () => {
            console.log("[v0] Mock database query:", table, columns, column, value)
            return { data: null, error: null }
          },
        }),
      }),
      upsert: async (data: any) => {
        console.log("[v0] Mock database upsert:", table, data)
        return { error: null }
      },
    }),
  }
}
