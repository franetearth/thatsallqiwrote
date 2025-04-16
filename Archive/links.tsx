import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const links = [
  { title: "GitHub", description: "Check out my open-source projects", url: "https://github.com/yourusername" },
  { title: "LinkedIn", description: "Connect with me professionally", url: "https://linkedin.com/in/yourusername" },
  { title: "Twitter", description: "Follow me for tech insights and updates", url: "https://twitter.com/yourusername" },
  { title: "Blog", description: "Read my latest articles on web development", url: "https://yourblog.com" },
]

export default function Links() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
