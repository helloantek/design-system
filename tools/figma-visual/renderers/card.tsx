import { Button, Card, CardContent, CardFooter, CardHeader, type CardSize } from '@helloantek/ds-react';
import type { Renderer } from './types';

// Maps the Sort UI 2.0 Card to code with the Figma sample slots: a 448 px card with a header (title, description,
// an Outline sm action), body text and a footer with Cancel and Save. The page background sits behind it.
export const renderCard: Renderer = (p) => (
  <div id="target" style={{ width: 'fit-content', padding: 8, background: 'var(--ds-background)' }}>
    <Card size={p.Size as CardSize} style={{ width: 448 }}>
      <CardHeader title="Card title" description="Card description" action={<Button variant="outline" size="sm">Action</Button>} />
      <CardContent>Card content — put anything here: text, fields, lists, media</CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  </div>
);
